import { Button, useToast } from "@laclass-ui/ui";

function App() {
  const { addToast } = useToast();

  return (
    <div className="p-10">
      <Button
        label="Show Success Toast"
        onClick={() => addToast({ message: "Success!" })}
      />
      <Button
        label="Show Error Toast"
        onClick={() =>
          addToast({ message: "Something went wrong!", type: "error" })
        }
        className="ml-2"
      />
    </div>
  );
}

export default App;
