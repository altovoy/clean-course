(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  interface InputProps {
    value: string;
    placeholder: string;
    id: string;
  }

  class Input {
    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor({ value, placeholder, id }: InputProps) {
      this.html = new HtmlElement(id, "input");
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField = new Input({
    value: "Fernando",
    placeholder: "Enter first name",
    id: "txtName",
  });

  console.log({ nameField });
})();
