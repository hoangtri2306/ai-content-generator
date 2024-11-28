import React, { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import CSS của React Quill
import ReactQuill from "react-quill";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const [editorContent, setEditorContent] = useState<string>(aiOutput);

  // Cập nhật nội dung khi `aiOutput` thay đổi
  React.useEffect(() => {
    setEditorContent(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Generated Content</h2>
        <Button
          className="flex gap-2"
          onClick={() => navigator.clipboard.writeText(editorContent)}
        >
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        theme="snow" // Giao diện editor
        style={{ height: "400px" }} // Thiết lập chiều cao
        readOnly={true} // Đặt chế độ chỉ đọc nếu cần
      />
    </div>
  );
}

export default OutputSection;
