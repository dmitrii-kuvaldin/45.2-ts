import ActionButtonGroup from "../../ui/buttons/actionButtonGroup/ActionButtonGroup";
import Button from "../../ui/buttons/button/Button";
import IconButton from "../../ui/buttons/iconButton/IconButton";
import Breadcrumbs from "../../ui/cards/breadcrumbs/Breadcrumbs";


export default function ButtonsPage() {

  // const buttons:ButtonItem[] = [
  //   { label: "Сохранить", onClick: () => alert("Сохранено"), variant: "primary" },
  //   { label: "Отмена", onClick: () => alert("Отменено"), variant: "outline" },
  // ];

  const buttons = [
    { label: "Сохранить", onClick: () => alert("Сохранено"), variant: "primary" as const },
    { label: "Отмена", onClick: () => alert("Отменено"), variant: "outline" as const },
  ];

  return (

    <div style={{ padding: "20px" }}>
      <Breadcrumbs />
      <div style={{ padding: "20px" }}>
        <Button onClick={() => alert("Primary Button")} variant="primary">
          Primary
        </Button>
      </div>
      <div style={{ padding: "20px" }}>
        <Button onClick={() => alert("Secondary Button")} variant="secondary">
          Secondary
        </Button>
      </div>
      <div style={{ padding: "20px" }}>
        <Button onClick={() => alert("Danger Button")} variant="danger">
          Danger
        </Button>
      </div>
      <div style={{ padding: "20px" }}>
        <Button onClick={() => alert("Outline Button")} variant="outline">
          Outline
        </Button>
      </div>
      <div style={{ padding: "20px" }}>
        <Button onClick={() => { }} variant="primary" size="small">
          Small
        </Button>
      </div>
      <div style={{ padding: "20px" }}>
        <Button onClick={() => { }} variant="primary" size="large" icon={<span>🔥</span>}>
          Large with Icon
        </Button>
      </div>
      <div style={{ padding: "20px" }}>
        <Button onClick={() => { }} variant="primary" loading>
          Loading
        </Button>
      </div>
      <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
        {/* Кнопка-ссылка */}
        <Button href="https://google.com" variant="danger" target="_blank">Ссылка как кнопка</Button>

        {/* Outline-кнопка-ссылка */}
        <Button href="https://openai.com" target="_blank" variant="outline">Outline-ссылка</Button>

        {/* Отключенная кнопка */}
        <Button disabled>Отключено</Button>

        {/* Кнопка с иконкой */}
        <Button onClick={() => alert("Клик!")} icon="🚀">С иконкой</Button>

        {/* Кнопка с загрузкой */}
        <Button loading>Загрузка...</Button>
      </div>
      <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
        <IconButton onClick={() => alert("Primary")} variant="primary" icon={<span>🔔</span>} />
        <IconButton onClick={() => alert("Secondary")} variant="secondary" icon={<span>⚙️</span>} />
        <IconButton onClick={() => alert("Danger")} variant="danger" icon={<span>❌</span>} />
        <IconButton onClick={() => { }} variant="outline" icon={<span>🔍</span>} />
        <IconButton onClick={() => { }} variant="primary" size="small" icon={<span>🎵</span>} />
        <IconButton onClick={() => { }} variant="primary" size="large" icon={<span>🚀</span>} />
        <IconButton onClick={() => { }} variant="primary" loading icon={''} />
      </div>
      <div style={{ padding: "20px" }}>
        <h3 style={{ color: "white" }}>Горизонтальная группа (центр)</h3>
        <ActionButtonGroup buttons={buttons} orientation="horizontal" align="center" />

        <h3 style={{ color: "white", marginTop: "20px" }}>Вертикальная группа (слева)</h3>
        <ActionButtonGroup buttons={buttons} orientation="vertical" align="left" />
      </div>
      
    </div>

  );
}
