import { useState } from "react";

export default function MobilePreview({
  content,
  style
}) {
  const [rating, setRating] =
    useState(0);

  return (
    <div className="w-[360px] bg-black rounded-[40px] p-4">
      <div
        className="h-[700px] p-6 overflow-auto"
        style={{
          background:
            style.backgroundColor,
          borderRadius:
            style.borderRadius
        }}
      >
        <h2
          style={{
            color:
              style.titleColor,
            fontSize:
              style.fontSize,
            fontWeight:
              style.fontWeight
          }}
        >
          {content.title}
        </h2>

        <p
          className="mt-2"
          style={{
            color:
              style.subtitleColor
          }}
        >
          {content.subtitle}
        </p>

        <div className="flex gap-2 mt-5">
          {[1, 2, 3, 4, 5].map(
            item => (
              <button
                key={item}
                onClick={() =>
                  setRating(item)
                }
                className="text-2xl"
                style={{
                  color:
                    item <= rating
                      ? style.selectedColor
                      : style.unselectedColor
                }}
              >
                ★
              </button>
            )
          )}
        </div>

        <div className="mt-5 space-y-2">
          {content.options.map(
            (
              option,
              index
            ) => (
              <div
                key={index}
                className="border p-2 rounded"
              >
                {option}
              </div>
            )
          )}
        </div>

        {content.comments && (
          <textarea
            className="w-full border rounded p-3 mt-5"
            rows="4"
            placeholder="Share your feedback..."
          />
        )}

        <button
          className="mt-5"
          style={{
            width:
              style.buttonWidth,
            height:
              style.buttonHeight,
            background:
              style.buttonColor,
            color:
              style.buttonTextColor,
            borderRadius:
              style.borderRadius
          }}
        >
          {content.submitText}
        </button>

        {content.image && (
          <img
            src={content.image}
            alt=""
            className="mt-8 rounded-lg"
          />
        )}

        <div className="mt-8">
          <h3 className="font-bold">
            {content.thankTitle}
          </h3>

          <p>
            {
              content.thankSubtitle
            }
          </p>

          <button
            className="mt-4 px-5 py-2"
            style={{
              background:
                style.buttonColor,
              color:
                style.buttonTextColor,
              borderRadius:
                style.borderRadius
            }}
          >
            {content.thankButton}
          </button>
        </div>
      </div>
    </div>
  );
}