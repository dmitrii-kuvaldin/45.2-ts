import React, { useState } from "react";
import Alert from "../../ui/feedback/alert/Alert";
import ProgressBar from "../../ui/feedback/progressBar/ProgressBar";
import Spinner from "../../ui/feedback/spinner/Spinner";
import Toast from "../../ui/feedback/toast/Toast";
import Tooltip from "../../ui/feedback/tooltip/Tooltip";
import Breadcrumbs from "../../ui/cards/breadcrumbs/Breadcrumbs";

const FeedbackPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(30);




  return (
    <>
      <Breadcrumbs />
      <div style={{ padding: "20px" }}>
        {showAlert && (
          <Alert
            message="Успешная операция!"
            type="success"
            autoClose={3000}
            onClose={() => setShowAlert(false)}
          />
        )}

        <Alert message="Ошибка запроса!" type="error" />
        <Alert message="Будьте осторожны!" type="warning" />
        <Alert message="Информация обновлена!" type="info" />
      </div>
      <div style={{ padding: "20px" }}>
        <button onClick={() => setShowToast(true)}>Показать уведомление</button>

        {showToast && (
          <Toast
            message="Данные успешно обновлены!"
            type="success"
            autoClose={3000}
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
      <div style={{ padding: "20px", color: "white" }}>
        <h3>Пример использования Tooltip</h3>

        <Tooltip text="Я сверху!" position="top">
          <button style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}>Наведи на меня</button>
        </Tooltip>

        <Tooltip text="Я снизу!" position="bottom">
          <button style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}>Наведи на меня</button>
        </Tooltip>

        <Tooltip text="Я слева!" position="left">
          <button style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}>Наведи на меня</button>
        </Tooltip>

        <Tooltip text="Я справа!" position="right">
          <button style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}>Наведи на меня</button>
        </Tooltip>
      </div>
      <div style={{ padding: "20px" }}>
        <h3>Пример использования Spinner</h3>

        {loading && <Spinner size="medium" />}
        <Spinner size="small" color="red" />
        <Spinner size="large" color="green" />

        <button onClick={() => setLoading(!loading)} style={{ marginTop: "20px" }}>
          {loading ? "Скрыть" : "Показать"} загрузку
        </button>
      </div>
      <div style={{ padding: "20px" }}>
        <h3>Линейный прогресс</h3>
        <ProgressBar value={progress} />
        <button onClick={() => setProgress((prev) => (prev >= 100 ? 0 : prev + 10))} style={{ marginTop: "10px" }}>
          Увеличить прогресс
        </button>

        <h3>Круговой прогресс</h3>
        <ProgressBar type="circle" value={progress} size={60} />

        <h3>Индетерминированный</h3>
        <ProgressBar indeterminate />
      </div>
    </>
  );
};

export default FeedbackPage;
