interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export default function MessageBubble({ message }: { message: Message }) {
  if (message.role === "system") {
    return (
      <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4 text-sm text-blue-200">
        {message.content}
      </div>
    );
  }

  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
          isUser
            ? "bg-primary-600 text-white"
            : "bg-background-7 text-white/90"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
