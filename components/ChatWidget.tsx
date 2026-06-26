"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
    role: "user" | "assistant" | "system";
    text: string;
    media?: string;
}

export default function ChatWidget() {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: "assistant", text: "¡Hola! Soy SourBot, el asistente inteligente de SourDev. ¿En qué tipo de desarrollo web o automatización con agentes de IA estás interesado?" }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [sessionId, setSessionId] = useState("");
    
    const socketRef = useRef<WebSocket | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    // Dynamic WS URL loader
    const getWsUrl = () => {
        if (process.env.NEXT_PUBLIC_CHAT_WS_URL) {
            return process.env.NEXT_PUBLIC_CHAT_WS_URL;
        }
        // Fallback for local development and production
        if (typeof window !== "undefined") {
            if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
                return "ws://localhost:3001/ws";
            }
            return "wss://bot.sourdev.app/ws";
        }
        return "wss://bot.sourdev.app/ws";
    };

    // Hydration fix
    useEffect(() => {
        setMounted(true);
        // Load or create sessionId
        let id = localStorage.getItem("sourdev_chat_session_id");
        if (!id) {
            id = `web-${Math.random().toString(36).substring(2, 11)}`;
            localStorage.setItem("sourdev_chat_session_id", id);
        }
        setSessionId(id);
    }, []);

    // Scroll to bottom on new messages
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen, isTyping]);

    // WebSocket setup when open
    useEffect(() => {
        if (!isOpen || !sessionId) return;

        const wsUrl = getWsUrl();
        const socket = new WebSocket(wsUrl);
        socketRef.current = socket;

        socket.onopen = () => {
            console.log("Conectado al servidor de WebSocket.");
            // Request chat history
            socket.send(JSON.stringify({
                action: "get_history",
                sessionId: sessionId
            }));
        };

        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                
                if (data.action === "history") {
                    if (data.history && data.history.length > 0) {
                        // Map server history back to ChatMessage array
                        const loadedMessages = data.history.map((msg: any) => ({
                            role: msg.role,
                            text: msg.content
                        }));
                        setMessages(loadedMessages);
                    }
                } else if (data.action === "message") {
                    setIsTyping(false);
                    setMessages(prev => [...prev, { 
                        role: "assistant", 
                        text: data.text,
                        media: data.media
                    }]);
                } else if (data.action === "error") {
                    setIsTyping(false);
                    setMessages(prev => [...prev, { 
                        role: "system", 
                        text: `Error: ${data.message}` 
                    }]);
                }
            } catch (err) {
                console.error("Error al analizar mensaje WS:", err);
            }
        };

        socket.onclose = () => {
            console.log("WebSocket cerrado. Reintentando en 3s...");
        };

        socket.onerror = (err) => {
            console.error("Error en WebSocket:", err);
        };

        return () => {
            if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING) {
                socket.close();
            }
        };
    }, [isOpen, sessionId]);

    const handleSendMessage = () => {
        const text = inputText.trim();
        if (!text) return;

        // Append user message immediately
        setMessages(prev => [...prev, { role: "user", text }]);
        setInputText("");
        setIsTyping(true);

        const socket = socketRef.current;
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({
                action: "message",
                text,
                sessionId
            }));
        } else {
            // Reconnect and send or display connection error
            setIsTyping(false);
            setMessages(prev => [...prev, { 
                role: "system", 
                text: "No se pudo enviar el mensaje: Conexión con el servidor desconectada." 
            }]);
        }
    };

    if (!mounted) return null;

    return (
        <>
            {/* Bubble Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-zinc-950 shadow-[0_0_24px_rgba(250,204,21,0.35)] transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_32px_rgba(250,204,21,0.5)] active:scale-95 cursor-pointer"
                aria-label="Abrir chat de soporte"
            >
                {isOpen ? (
                    <X className="h-6 w-6 transition-transform duration-200" />
                ) : (
                    <MessageSquare className="h-6 w-6 transition-transform duration-200" />
                )}
            </button>

            {/* Chat Floating Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 30 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[360px] sm:w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="h-8 w-8 rounded-lg border border-yellow-400/40 bg-yellow-400/5 flex items-center justify-center font-mono font-bold text-yellow-400 text-xs">
                                        SD
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-zinc-950 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-mono text-sm font-semibold tracking-wider text-yellow-400">
                                        SOURBOT
                                    </span>
                                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">
                                        Asistente IA Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-full p-1 text-zinc-400 hover:bg-white/5 hover:text-zinc-50 transition cursor-pointer"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Messages Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, index) => {
                                if (msg.role === "system") {
                                    return (
                                        <div key={index} className="text-center text-[10px] text-zinc-500 font-medium px-4">
                                            {msg.text}
                                        </div>
                                    );
                                }
                                
                                const isUser = msg.role === "user";
                                return (
                                    <div
                                        key={index}
                                        className={`flex flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}
                                    >
                                        <div
                                            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                                                isUser
                                                    ? "bg-yellow-400 text-zinc-950 font-medium rounded-tr-none shadow-[0_2px_8px_rgba(250,204,21,0.15)]"
                                                    : "bg-white/5 border border-white/8 text-zinc-100 rounded-tl-none"
                                            }`}
                                        >
                                            {msg.text.split("\n").map((line, lIdx) => (
                                                <p key={lIdx} className={lIdx > 0 ? "mt-1.5" : ""}>
                                                    {line}
                                                </p>
                                            ))}
                                            
                                            {/* Render product images if available */}
                                            {msg.media && (
                                                <div className="mt-2.5 overflow-hidden rounded-lg border border-white/10">
                                                    {/* We can construct dynamic URL or use relative path relative to chatbot server domain */}
                                                    <img
                                                        src={
                                                            msg.media.startsWith("http") 
                                                                ? msg.media 
                                                                : `${process.env.NEXT_PUBLIC_CHAT_API_URL || (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'http://localhost:3001' : 'https://bot.sourdev.app')}${msg.media}`
                                                        }
                                                        alt="Catálogo o información del bot"
                                                        className="w-full h-auto object-cover max-h-[160px]"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex flex-col items-start gap-1">
                                    <div className="rounded-2xl rounded-tl-none bg-white/5 border border-white/8 p-3.5">
                                        <div className="flex gap-1.5 items-center">
                                            <span className="h-2 w-2 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="h-2 w-2 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="h-2 w-2 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="border-t border-white/10 bg-white/5 p-3 flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSendMessage();
                                }}
                                placeholder="Escribe tu mensaje..."
                                className="flex-1 rounded-xl bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-yellow-400/50"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-zinc-950 shadow-md transition-all duration-200 hover:scale-105 hover:bg-yellow-300 active:scale-95 cursor-pointer"
                                aria-label="Enviar mensaje"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
