import { Button, LightEffect, useToast } from "@laclass-ui/ui";

function App() {
  const { addToast } = useToast();

  return (
    <div className="relative min-h-screen w p-10 flex items-center justify-center">
      <LightEffect color="rgba(200, 255, 255, 0.4)" size={50} intensity={0.1} />
      <Button
        label="Show Success Toast"
        onClick={() => addToast({ message: "Success!" })}
      >
        {" "}
        message de succès !
      </Button>
      <Button
        label="Show Error Toast"
        onClick={() =>
          addToast({ message: "Something went wrong!", type: "error" })
        }
        className="ml-2"
      >
        {" "}
        Afficher une erreur
      </Button>
    </div>
  );
}

export default App;
