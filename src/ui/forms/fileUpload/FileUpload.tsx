import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./FileUpload.module.css";

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // ✅ Теперь в правильном формате
    maxSize: 2 * 1024 * 1024, // 2MB
  });

  return (
    <div {...getRootProps()} className={styles.dropzone}>
      <input {...getInputProps()} />
      <p>{isDragActive ? "Отпустите файл сюда..." : "Перетащите или кликните для загрузки"}</p>
    </div>
  );
};

export default FileUpload;
