import React from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "next/navigation";
import { handleUpload } from "@/lib/firebase/storage";
import { UploadModalProps } from "./index.interface";

const UploadModal: React.FC<UploadModalProps> = ({ handleClose }) => {
  const [file, setFile] = React.useState<File | null>(null);
  const params = useParams();

  // Ensure params.id is a string
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

  return (
    <div className="mt4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button variant="outlined" component="label">
          <input
            type="file"
            hidden
            accept="/image/*"
            multiple
            onChange={(e) => {
              if (e?.target?.files === null) return;
              setFile(e?.target?.files[0]);
            }}
          />
          Upload
        </Button>
        {file !== null ? (
          <>
            <span>{file?.name}</span>
            <CloseIcon
              className="cursor-pointer text-red-700"
              onClick={() => setFile(null)}
            />
          </>
        ) : null}
        <Button
          variant="contained"
          component="label"
          disabled={file === null || !id} // Disable button if id is invalid
          onClick={() => {
            if (id) {
              handleUpload(id, setFile, handleClose, file);
            } else {
              console.error("ID is invalid.");
            }
          }}
        >
          Submit{" "}
        </Button>
      </div>
    </div>
  );
};

export default UploadModal;
