export default function StylingPanel({
  style,
  setStyle
}) {
  const update = (key, value) => {
    setStyle({
      ...style,
      [key]: value
    });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold text-lg mb-4">
        Styling
      </h2>

      <div className="space-y-4">
        <input
          type="color"
          value={style.backgroundColor}
          onChange={e =>
            update(
              "backgroundColor",
              e.target.value
            )
          }
        />

        <input
          type="color"
          value={style.buttonColor}
          onChange={e =>
            update(
              "buttonColor",
              e.target.value
            )
          }
        />

        <input
          type="range"
          min="12"
          max="30"
          value={style.fontSize}
          onChange={e =>
            update(
              "fontSize",
              Number(
                e.target.value
              )
            )
          }
        />

        <input
          type="range"
          min="0"
          max="40"
          value={style.borderRadius}
          onChange={e =>
            update(
              "borderRadius",
              Number(
                e.target.value
              )
            )
          }
        />
      </div>
    </div>
  );
}