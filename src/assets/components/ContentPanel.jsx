export default function ContentPanel({
  content,
  setContent
}) {
  const addOption = () => {
    setContent({
      ...content,
      options: [...content.options, ""]
    });
  };

  const removeOption = index => {
    setContent({
      ...content,
      options: content.options.filter(
        (_, i) => i !== index
      )
    });
  };

  const updateOption = (value, index) => {
    const updated = [...content.options];
    updated[index] = value;

    setContent({
      ...content,
      options: updated
    });
  };

  const uploadImage = e => {
    const file = e.target.files[0];

    if (file) {
      setContent({
        ...content,
        image: URL.createObjectURL(file)
      });
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold text-lg mb-4">
        Content
      </h2>

      <div className="space-y-3">
        <input
          className="w-full border p-2 rounded"
          value={content.title}
          placeholder="Title"
          onChange={e =>
            setContent({
              ...content,
              title: e.target.value
            })
          }
        />

        <input
          className="w-full border p-2 rounded"
          value={content.subtitle}
          placeholder="Subtitle"
          onChange={e =>
            setContent({
              ...content,
              subtitle: e.target.value
            })
          }
        />

        {content.options.map((item, index) => (
          <div
            key={index}
            className="flex gap-2"
          >
            <input
              className="flex-1 border p-2 rounded"
              value={item}
              placeholder="Option"
              onChange={e =>
                updateOption(
                  e.target.value,
                  index
                )
              }
            />

            <button
              onClick={() =>
                removeOption(index)
              }
              className="px-3 bg-red-500 text-white rounded"
            >
              ×
            </button>
          </div>
        ))}

        <button
          onClick={addOption}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Add Option
        </button>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={content.comments}
            onChange={() =>
              setContent({
                ...content,
                comments:
                  !content.comments
              })
            }
          />
          Additional Comment
        </label>

        <input
          className="w-full border p-2 rounded"
          value={content.submitText}
          placeholder="Submit Button"
          onChange={e =>
            setContent({
              ...content,
              submitText:
                e.target.value
            })
          }
        />

        <input
          type="file"
          accept="image/*"
          onChange={uploadImage}
        />

        <input
          className="w-full border p-2 rounded"
          value={content.thankTitle}
          placeholder="Thank You Title"
          onChange={e =>
            setContent({
              ...content,
              thankTitle:
                e.target.value
            })
          }
        />

        <input
          className="w-full border p-2 rounded"
          value={content.thankSubtitle}
          placeholder="Thank You Subtitle"
          onChange={e =>
            setContent({
              ...content,
              thankSubtitle:
                e.target.value
            })
          }
        />

        <input
          className="w-full border p-2 rounded"
          value={content.thankButton}
          placeholder="Button Text"
          onChange={e =>
            setContent({
              ...content,
              thankButton:
                e.target.value
            })
          }
        />
      </div>
    </div>
  );
}