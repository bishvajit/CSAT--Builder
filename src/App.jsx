import { useState } from "react";
import ContentPanel from "./components/ContentPanel";
import StylingPanel from "./components/StylingPanel";
import MobilePreview from "./components/MobilePreview";

export default function App() {
  const [content, setContent] = useState({
    title: "How was your experience?",
    subtitle: "We would love your feedback",
    options: ["Fast Delivery"],
    comments: true,
    submitText: "Submit",
    thankTitle: "Thank You",
    thankSubtitle: "Your feedback has been recorded",
    thankButton: "Done",
    image: null
  });

  const [style, setStyle] = useState({
    backgroundColor: "#ffffff",
    titleColor: "#111827",
    subtitleColor: "#6b7280",
    buttonColor: "#2563eb",
    buttonTextColor: "#ffffff",
    fontSize: 16,
    fontWeight: 600,
    borderRadius: 12,
    buttonWidth: 220,
    buttonHeight: 44,
    selectedColor: "#f59e0b",
    unselectedColor: "#d1d5db"
  });

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">
        CSAT Campaign Builder
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <ContentPanel
            content={content}
            setContent={setContent}
          />

          <StylingPanel
            style={style}
            setStyle={setStyle}
          />
        </div>

        <div className="lg:col-span-2 flex justify-center">
          <MobilePreview
            content={content}
            style={style}
          />
        </div>
      </div>
    </div>
  );
}