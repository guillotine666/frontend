import fs from "fs";
import { main } from "./index.js";

const html = fs.readFileSync("./src/homeWork7/index.html");

describe("test main logic", () => {
  let input;
  let button;
  let collector;

  beforeEach(() => {
    document.documentElement.innerHTML = html;

    main();

    input = document.querySelector("input");
    button = document.querySelector("button");
    collector = document.querySelector(".collector");
  });

  test("button hidden when start", () => {
    expect(button.style.visibility).toBe("hidden");
  });

  test("input have to change value", () => {
    expect(collector.children.length).toBe(3);
    input.value = "qweascdfb";
    button.click();

    expect(collector.children.length).toBe(4);
  });

  test("remove first after 3 elements added", () => {
    const firstParagraph = collector.firstElementChild;
    input.value = "first";
    button.click();
    input.value = "second";
    button.click();
    input.value = "third";
    button.click();

    expect(firstParagraph.innerHTML).not.toBe(
      collector.firstElementChild.innerHTML
    );
  });

  test("make button visible after change input value", () => {
    const event = new Event("input");
    input.value = "this is super test";
    input.dispatchEvent(event);

    expect(button.style.visibility).toBe("visible");
    button.click();
    expect(button.style.visibility).toBe("hidden");
  });

  test("input on last position", () => {
    input.value = "call";
    button.click();
    const lastParagraph = collector.lastElementChild;

    expect(lastParagraph.innerHTML).toBe("call");
  });

  test("shouldn't show button if input contains white spaces only", () => {
    const event = new Event("input");
    input.value = "      \n  \t";
    input.dispatchEvent(event);

    expect(button.style.visibility).toBe("hidden");
  });
});
