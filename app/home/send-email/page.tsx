"use client";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const FONT = `'DM Sans', sans-serif`;
const DISPLAY_FONT = `'Playfair Display', serif`;

const palette = {
  bg: "#F6F5F2",
  surface: "#FFFFFF",
  surfaceHover: "#FAFAF8",
  border: "#E8E6E1",
  borderFocus: "#2D2A26",
  text: "#1A1816",
  textSoft: "#7A756D",
  textMuted: "#B0AAA0",
  accent: "#1A6B4A",
  accentHover: "#145A3D",
  accentLight: "#E8F5EE",
  danger: "#C4453C",
  dangerLight: "#FEF2F1",
  tag: "#EDEBE7",
  shadow: "0 1px 3px rgba(26,24,22,0.06), 0 8px 24px rgba(26,24,22,0.08)",
  shadowLg: "0 4px 12px rgba(26,24,22,0.08), 0 24px 48px rgba(26,24,22,0.12)",
};

const EMAIL_OPTIONS = [
  { email: "mpr.fci@niic.in", label: "mpr.fci@niic.in" },
  { email: "webmaster.fci@goiv.in", label: "webmaster.fci@goiv.in" },
  { email: "icds.westbengal@goiv.in", label: "icds.westbengal@goiv.in" },
  { email: "eforms@niic.in", label: "eforms@niic.in" },
  { email: "crb@rb.railnet.goiv.in", label: "crb@rb.railnet.goiv.in" },
];

const REPLY_TO_OPTIONS = [
  { email: "mpr.fci@nic.in", label: "mpr.fci@nic.in" },
  { email: "webmaster.fci@gov.in", label: "webmaster.fci@gov.in" },
  { email: "icdswestbengal@gmail.com", label: "icdswestbengal@gmail.com" },
  { email: "eforms@nic.in", label: "eforms@nic.in" },
  { email: "crb@rb.railnet.gov.in", label: "crb@rb.railnet.gov.in" },
];

const icons = {
  send: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  attach: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  ),
  bold: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
      <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
    </svg>
  ),
  italic: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="4" x2="10" y2="4" />
      <line x1="14" y1="20" x2="5" y2="20" />
      <line x1="15" y1="4" x2="9" y2="20" />
    </svg>
  ),
  underline: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
      <line x1="4" y1="21" x2="20" y2="21" />
    </svg>
  ),
  list: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  ),
  link: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  close: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  trash: (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  chevDown: (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  image: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  emoji: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  schedule: (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  pencil: (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  check: (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

// ─── Inline dropdown component ─────────────────────────────────────────────────
function InlineDropdown({
  value,
  options,
  onChange,
}: {
  value: string;
  options: { email: string; label: string }[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-flex" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          background: open ? palette.accentLight : palette.tag,
          border: `1px solid ${open ? palette.accent : palette.border}`,
          borderRadius: 7,
          padding: "4px 10px 4px 10px",
          fontSize: 13,
          color: open ? palette.accent : palette.text,
          fontFamily: FONT,
          cursor: "pointer",
          transition: "all 0.15s",
          fontWeight: 500,
        }}
        onMouseEnter={(e) => {
          if (!open) {
            e.currentTarget.style.background = palette.accentLight;
            e.currentTarget.style.borderColor = palette.accent;
            e.currentTarget.style.color = palette.accent;
          }
        }}
        onMouseLeave={(e) => {
          if (!open) {
            e.currentTarget.style.background = palette.tag;
            e.currentTarget.style.borderColor = palette.border;
            e.currentTarget.style.color = palette.text;
          }
        }}
      >
        <span
          style={{
            maxWidth: 220,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </span>
        <span
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            display: "flex",
            alignItems: "center",
            color: palette.textSoft,
          }}
        >
          {icons.chevDown}
        </span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            zIndex: 100,
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 10,
            boxShadow: palette.shadowLg,
            minWidth: 260,
            overflow: "hidden",
            animation: "dropIn 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {options.map((opt) => (
            <button
              key={opt.email}
              onClick={() => {
                onChange(opt.email);
                setOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px 14px",
                border: "none",
                background:
                  value === opt.email ? palette.accentLight : "transparent",
                cursor: "pointer",
                fontFamily: FONT,
                fontSize: 13,
                color: value === opt.email ? palette.accent : palette.text,
                textAlign: "left",
                transition: "background 0.1s",
              }}
              onMouseEnter={(e) => {
                if (value !== opt.email)
                  e.currentTarget.style.background = palette.surfaceHover;
              }}
              onMouseLeave={(e) => {
                if (value !== opt.email)
                  e.currentTarget.style.background = "transparent";
              }}
            >
              <span>{opt.label}</span>
              {value === opt.email && (
                <span style={{ color: palette.accent }}>{icons.check}</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Editable name inline ──────────────────────────────────────────────────────
function EditableName({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const commit = () => {
    const trimmed = draft.trim() || value;
    setDraft(trimmed);
    onChange(trimmed);
    setEditing(false);
  };

  useEffect(() => {
    if (editing) inputRef.current?.select();
  }, [editing]);

  if (editing) {
    return (
      <input
        ref={inputRef}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit();
          if (e.key === "Escape") {
            setDraft(value);
            setEditing(false);
          }
        }}
        style={{
          fontSize: 14,
          fontFamily: FONT,
          fontWeight: 500,
          color: palette.text,
          border: `1px solid ${palette.accent}`,
          borderRadius: 7,
          padding: "3px 10px",
          outline: "none",
          background: palette.accentLight,
          minWidth: 240,
          maxWidth: 380,
        }}
      />
    );
  }

  return (
    <button
      onClick={() => {
        setDraft(value);
        setEditing(true);
      }}
      title="Click to edit sender name"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "transparent",
        border: `1px solid transparent`,
        borderRadius: 7,
        padding: "4px 8px 4px 4px",
        fontSize: 14,
        fontWeight: 500,
        color: palette.text,
        fontFamily: FONT,
        cursor: "text",
        transition: "all 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = palette.tag;
        e.currentTarget.style.borderColor = palette.border;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.borderColor = "transparent";
      }}
    >
      {value}
      <span
        style={{
          color: palette.textMuted,
          display: "flex",
          alignItems: "center",
        }}
      >
        {icons.pencil}
      </span>
    </button>
  );
}

function Tag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        background: palette.tag,
        borderRadius: 6,
        padding: "3px 8px 3px 10px",
        fontSize: 13,
        color: palette.text,
        fontFamily: FONT,
        letterSpacing: "0.01em",
      }}
    >
      {label}
      <button
        onClick={onRemove}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 2,
          display: "flex",
          alignItems: "center",
          color: palette.textSoft,
          borderRadius: 4,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = palette.danger)}
        onMouseLeave={(e) => (e.currentTarget.style.color = palette.textSoft)}
      >
        {icons.close}
      </button>
    </span>
  );
}

function ToolbarBtn({
  icon,
  active,
  onClick,
  title,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  title: string;
}) {
  const [hov, setHov] = useState(false);
  return (
    <button
      title={title}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: active
          ? palette.accentLight
          : hov
            ? palette.tag
            : "transparent",
        border: "none",
        borderRadius: 6,
        padding: "6px 8px",
        cursor: "pointer",
        color: active ? palette.accent : palette.textSoft,
        display: "flex",
        alignItems: "center",
        transition: "all 0.15s",
      }}
    >
      {icon}
    </button>
  );
}

function ActionBtn({
  icon,
  onClick,
  title,
  danger,
}: {
  icon: React.ReactNode;
  onClick?: () => void;
  title: string;
  danger?: boolean;
}) {
  const [hov, setHov] = useState(false);
  return (
    <button
      title={title}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? danger
            ? palette.dangerLight
            : palette.tag
          : "transparent",
        border: "none",
        borderRadius: 8,
        padding: "8px 10px",
        cursor: "pointer",
        color: danger
          ? hov
            ? palette.danger
            : palette.textSoft
          : palette.textSoft,
        display: "flex",
        alignItems: "center",
        transition: "all 0.15s",
      }}
    >
      {icon}
    </button>
  );
}

export default function ComposeEmail() {
  const router = useRouter();
  const [form, setForm] = useState({
    fromName: "Food Corporation of India (FCI)",
    fromEmail: EMAIL_OPTIONS[0].email,
    replyTo: REPLY_TO_OPTIONS[0].email,
    to: [] as string[],
    cc: [] as string[],
    bcc: [] as string[],
    subject: "",
    body: "",
  });
  const [toInput, setToInput] = useState("");
  const [ccInput, setCcInput] = useState("");
  const [bccInput, setBccInput] = useState("");
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [attachments, setAttachments] = useState<
    { name: string; size: number; file: File }[]
  >([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [boldActive, setBoldActive] = useState(false);
  const [italicActive, setItalicActive] = useState(false);
  const [underlineActive, setUnderlineActive] = useState(false);

  const bodyRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.innerHTML = "";
  }, []);

  const addTag = (
    field: "to" | "cc" | "bcc",
    value: string,
    setter: (v: string) => void,
  ) => {
    const email = value.trim().replace(/,$/, "");
    if (email && email.includes("@")) {
      setForm((p) => ({ ...p, [field]: [...p[field], email] }));
      setter("");
    }
  };

  const removeTag = (field: "to" | "cc" | "bcc", idx: number) => {
    setForm((p) => ({ ...p, [field]: p[field].filter((_, i) => i !== idx) }));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    field: "to" | "cc" | "bcc",
    value: string,
    setter: (v: string) => void,
  ) => {
    if (e.key === "Enter" || e.key === "," || e.key === "Tab") {
      e.preventDefault();
      addTag(field, value, setter);
    }
    if (e.key === "Backspace" && !value && form[field].length > 0) {
      removeTag(field, form[field].length - 1);
    }
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments((prev) => [
      ...prev,
      ...files.map((f) => ({ name: f.name, size: f.size, file: f })),
    ]);
    e.target.value = "";
  };

  const removeAttachment = (idx: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== idx));
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  };

  const execCommand = (cmd: string) => {
    document.execCommand(cmd, false, undefined);
    bodyRef.current?.focus();
    if (cmd === "bold") setBoldActive((v) => !v);
    if (cmd === "italic") setItalicActive((v) => !v);
    if (cmd === "underline") setUnderlineActive((v) => !v);
  };

  const handleSend = async () => {
    if (form.to.length === 0) return;
    const currentBody = bodyRef.current?.innerHTML || "";
    if (!currentBody.trim() || currentBody === "<br>") {
      setError("Please write a message body before sending.");
      setTimeout(() => setError(""), 3000);
      return;
    }
    if (!form.subject.trim()) {
      setError("Please add a subject line.");
      setTimeout(() => setError(""), 3000);
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fromName: form.fromName,
          fromEmail: form.fromEmail,
          replyTo: form.replyTo,
          to: form.to,
          cc: form.cc,
          bcc: form.bcc,
          subject: form.subject,
          body: currentBody,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setTimeout(() => {
          setSent(false);
          setSending(false);
        }, 2500);
      } else {
        setError(data.message || "Failed to send email");
        setSending(false);
      }
    } catch (err) {
      console.error("Send error:", err);
      setError("Network error — could not reach the server.");
      setSending(false);
    }
  };

  const handleDiscard = () => {
    setForm((p) => ({ ...p, to: [], cc: [], bcc: [], subject: "", body: "" }));
    if (bodyRef.current) bodyRef.current.innerHTML = "";
    setAttachments([]);
    setShowCc(false);
    setShowBcc(false);
    setError("");
    setToInput("");
    setCcInput("");
    setBccInput("");
  };

  const fieldRow = (
    label: string,
    field: "to" | "cc" | "bcc",
    tags: string[],
    input: string,
    setInput: (v: string) => void,
    inputRef: React.RefObject<HTMLInputElement> | null,
  ) => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        padding: "10px 24px",
        borderBottom: `1px solid ${palette.border}`,
        minHeight: 44,
        gap: 0,
      }}
    >
      <span
        style={{
          fontSize: 13,
          color: palette.textSoft,
          fontFamily: FONT,
          minWidth: 56,
          paddingTop: 7,
          flexShrink: 0,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </span>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 6,
          flex: 1,
        }}
      >
        {tags.map((t, i) => (
          <Tag key={i} label={t} onRemove={() => removeTag(field, i)} />
        ))}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, field, input, setInput)}
          onBlur={() => addTag(field, input, setInput)}
          placeholder={tags.length === 0 ? "name@example.com" : ""}
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            minWidth: 140,
            fontSize: 14,
            fontFamily: FONT,
            color: palette.text,
            padding: "6px 0",
            background: "transparent",
          }}
        />
      </div>
      {field === "to" && (
        <div style={{ display: "flex", gap: 2, paddingTop: 5 }}>
          {!showCc && (
            <button
              onClick={() => setShowCc(true)}
              style={{
                background: "none",
                border: "none",
                fontSize: 12,
                color: palette.textMuted,
                cursor: "pointer",
                padding: "2px 6px",
                borderRadius: 4,
                fontFamily: FONT,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = palette.accent)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = palette.textMuted)
              }
            >
              Cc
            </button>
          )}
          {!showBcc && (
            <button
              onClick={() => setShowBcc(true)}
              style={{
                background: "none",
                border: "none",
                fontSize: 12,
                color: palette.textMuted,
                cursor: "pointer",
                padding: "2px 6px",
                borderRadius: 4,
                fontFamily: FONT,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = palette.accent)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = palette.textMuted)
              }
            >
              Bcc
            </button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: palette.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        fontFamily: FONT,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Playfair+Display:wght@600;700&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          width: "100%",
          maxWidth: 720,
          background: palette.surface,
          borderRadius: 16,
          boxShadow: palette.shadowLg,
          overflow: "hidden",
          border: `1px solid ${palette.border}`,
          animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px 16px",
            borderBottom: `1px solid ${palette.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            onClick={() => router.back()}
            style={{
              fontSize: 12,
              color: palette.accent,
              fontFamily: FONT,
              background: palette.accentLight,
              padding: "4px 12px",
              borderRadius: 20,
              letterSpacing: "0.02em",
              transition: "all 0.3s",
              cursor: "pointer",
            }}
          >
            Back
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 22,
              fontFamily: DISPLAY_FONT,
              fontWeight: 700,
              color: palette.text,
              letterSpacing: "-0.02em",
            }}
          >
            New Message
          </h1>
        </div>

        {/* From — editable name + avatar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 24px",
            borderBottom: `1px solid ${palette.border}`,
            gap: 0,
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: palette.textSoft,
              fontFamily: FONT,
              minWidth: 56,
              letterSpacing: "0.02em",
              flexShrink: 0,
            }}
          >
            From
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${palette.accent}, #2A8B64)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                fontFamily: FONT,
                flexShrink: 0,
                letterSpacing: "0.02em",
              }}
            >
              {form.fromName
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
            </div>

            {/* Editable display name */}
            <EditableName
              value={form.fromName}
              onChange={(v) => setForm((p) => ({ ...p, fromName: v }))}
            />
          </div>
        </div>

        {/* From Email — dropdown */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 24px",
            borderBottom: `1px solid ${palette.border}`,
            gap: 0,
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: palette.textSoft,
              fontFamily: FONT,
              minWidth: 56,
              letterSpacing: "0.02em",
              flexShrink: 0,
            }}
          >
            Email
          </span>
          <InlineDropdown
            value={form.fromEmail}
            options={EMAIL_OPTIONS}
            onChange={(v) => setForm((p) => ({ ...p, fromEmail: v }))}
          />
        </div>

        {/* Reply-To — dropdown */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 24px",
            borderBottom: `1px solid ${palette.border}`,
            gap: 0,
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: palette.textSoft,
              fontFamily: FONT,
              minWidth: 56,
              letterSpacing: "0.02em",
              flexShrink: 0,
            }}
          >
            Reply-To
          </span>
          <InlineDropdown
            value={form.replyTo}
            options={REPLY_TO_OPTIONS}
            onChange={(v) => setForm((p) => ({ ...p, replyTo: v }))}
          />
        </div>

        {/* To */}
        {fieldRow(
          "To",
          "to",
          form.to,
          toInput,
          setToInput,
          toRef as React.RefObject<HTMLInputElement>,
        )}

        {/* Cc */}
        {showCc && fieldRow("Cc", "cc", form.cc, ccInput, setCcInput, null)}

        {/* Bcc */}
        {showBcc &&
          fieldRow("Bcc", "bcc", form.bcc, bccInput, setBccInput, null)}

        {/* Subject */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 24px",
            borderBottom: `1px solid ${palette.border}`,
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: palette.textSoft,
              fontFamily: FONT,
              minWidth: 56,
              letterSpacing: "0.02em",
            }}
          >
            Subject
          </span>
          <input
            type="text"
            value={form.subject}
            onChange={(e) =>
              setForm((p) => ({ ...p, subject: e.target.value }))
            }
            placeholder="What's this about?"
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              fontSize: 14,
              fontFamily: FONT,
              color: palette.text,
              fontWeight: 500,
              padding: "6px 0",
              background: "transparent",
            }}
          />
        </div>

        {/* Formatting Toolbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: "8px 20px",
            borderBottom: `1px solid ${palette.border}`,
            background: palette.surfaceHover,
          }}
        >
          <ToolbarBtn
            icon={icons.bold}
            active={boldActive}
            onClick={() => execCommand("bold")}
            title="Bold"
          />
          <ToolbarBtn
            icon={icons.italic}
            active={italicActive}
            onClick={() => execCommand("italic")}
            title="Italic"
          />
          <ToolbarBtn
            icon={icons.underline}
            active={underlineActive}
            onClick={() => execCommand("underline")}
            title="Underline"
          />
          <div
            style={{
              width: 1,
              height: 18,
              background: palette.border,
              margin: "0 6px",
            }}
          />
          <ToolbarBtn
            icon={icons.list}
            onClick={() => execCommand("insertUnorderedList")}
            title="Bullet list"
          />
          <ToolbarBtn
            icon={icons.link}
            onClick={() => {
              const url = prompt("Enter URL:");
              if (url) document.execCommand("createLink", false, url);
              bodyRef.current?.focus();
            }}
            title="Insert link"
          />
          <div
            style={{
              width: 1,
              height: 18,
              background: palette.border,
              margin: "0 6px",
            }}
          />
          <ToolbarBtn icon={icons.emoji} title="Emoji" />
          <ToolbarBtn icon={icons.image} title="Insert image" />
        </div>

        {/* Body */}
        <div
          ref={bodyRef}
          contentEditable
          data-placeholder="Write your message..."
          onInput={() =>
            setForm((p) => ({ ...p, body: bodyRef.current?.innerHTML || "" }))
          }
          style={{
            minHeight: 260,
            maxHeight: 420,
            overflowY: "auto",
            padding: "20px 24px",
            outline: "none",
            fontSize: 14,
            lineHeight: 1.7,
            color: palette.text,
            fontFamily: FONT,
            position: "relative",
          }}
          suppressContentEditableWarning
        />

        {/* Error banner */}
        {error && (
          <div
            style={{
              padding: "10px 24px",
              background: palette.dangerLight,
              borderTop: `1px solid #F5D5D3`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              animation: "slideUp 0.25s ease-out",
            }}
          >
            <span
              style={{ fontSize: 13, color: palette.danger, fontFamily: FONT }}
            >
              {error}
            </span>
            <button
              onClick={() => setError("")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: palette.danger,
                display: "flex",
                padding: 2,
              }}
            >
              {icons.close}
            </button>
          </div>
        )}

        {/* Attachments */}
        {attachments.length > 0 && (
          <div
            style={{
              padding: "12px 24px",
              borderTop: `1px solid ${palette.border}`,
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {attachments.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: palette.tag,
                  borderRadius: 10,
                  padding: "8px 12px",
                  fontSize: 13,
                  color: palette.text,
                  fontFamily: FONT,
                }}
              >
                <span
                  style={{
                    maxWidth: 160,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {a.name}
                </span>
                <span style={{ color: palette.textMuted, fontSize: 11 }}>
                  {formatSize(a.size)}
                </span>
                <button
                  onClick={() => removeAttachment(i)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: palette.textSoft,
                    display: "flex",
                    padding: 2,
                    borderRadius: 4,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = palette.danger)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = palette.textSoft)
                  }
                >
                  {icons.close}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            padding: "14px 24px",
            borderTop: `1px solid ${palette.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: palette.surfaceHover,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <button
              onClick={handleSend}
              disabled={sending || form.to.length === 0}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: sent
                  ? palette.accent
                  : sending
                    ? palette.textSoft
                    : palette.accent,
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "10px 22px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: FONT,
                cursor: sending || form.to.length === 0 ? "default" : "pointer",
                opacity: form.to.length === 0 ? 0.4 : 1,
                transition: "all 0.2s",
                boxShadow:
                  form.to.length > 0 ? "0 2px 8px rgba(26,107,74,0.3)" : "none",
              }}
              onMouseEnter={(e) => {
                if (!sending && form.to.length > 0)
                  e.currentTarget.style.background = palette.accentHover;
              }}
              onMouseLeave={(e) => {
                if (!sending) e.currentTarget.style.background = palette.accent;
              }}
            >
              {sent ? (
                "✓ Sent"
              ) : sending ? (
                <>
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "#fff",
                      borderRadius: "50%",
                      animation: "spin 0.6s linear infinite",
                      display: "inline-block",
                    }}
                  />
                  Sending...
                </>
              ) : (
                <>{icons.send} Send</>
              )}
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                background: "transparent",
                border: `1px solid ${palette.border}`,
                borderRadius: 10,
                padding: "10px 10px",
                cursor: "pointer",
                color: palette.textSoft,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = palette.tag;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
              title="Schedule send"
            >
              {icons.schedule}
              {icons.chevDown}
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <input
              type="file"
              ref={fileRef}
              onChange={handleFiles}
              multiple
              style={{ display: "none" }}
            />
            <ActionBtn
              icon={icons.attach}
              onClick={() => fileRef.current?.click()}
              title="Attach files"
            />
            <ActionBtn
              icon={icons.trash}
              onClick={handleDiscard}
              title="Discard"
              danger
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: ${palette.textMuted};
          pointer-events: none;
          display: block;
        }
        [contenteditable] { caret-color: ${palette.accent}; }
        [contenteditable]::-webkit-scrollbar { width: 6px; }
        [contenteditable]::-webkit-scrollbar-track { background: transparent; }
        [contenteditable]::-webkit-scrollbar-thumb { background: ${palette.border}; border-radius: 3px; }
        input::placeholder { color: ${palette.textMuted}; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}
