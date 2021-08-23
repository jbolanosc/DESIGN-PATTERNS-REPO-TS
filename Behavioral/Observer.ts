//Subscription system that allows you notify multiple objects about changes
//Decouples the state from the bussiness logic

import { consoleColor } from "../utils";

interface IPublisher {
  addSubscriber(subscriber: any): void;
  removeSubscriber(subscriber: any): void;
  notifyObservers(): void;
}

interface IObserver {
  notify(payload: any): void;
}

class Publisher implements IPublisher {
  subscribers: IObserver[];
  state: any;

  constructor(state: any = {}) {
    this.subscribers = [];
    this.state = state;
  }

  addSubscriber(subscriber: IObserver) {
    if (this.subscribers.includes(subscriber)) return;
    this.subscribers.push(subscriber);
  }

  removeSubscriber(subscriber: IObserver) {
    if (!this.subscribers.includes(subscriber)) return;
    let index = this.subscribers.indexOf(subscriber);
    this.subscribers.splice(index, 1);
  }

  notifyObservers() {
    this.subscribers.forEach((subscriber) => subscriber.notify(this.state));
  }

  setState(state: any) {
    this.state = state;
    this.notifyObservers();
  }
}

class User implements IObserver {
  renderTodos(todos) {
    todos.forEach((todo) => {
      consoleColor("cyan", "-----");
      consoleColor(
        todo.isCompleted ? "green" : "red",
        `${todo.title} ${todo.isCompleted ? "[DONE]" : "[PENDING]"}`
      );
      consoleColor("cyan", "-----");
    });
  }

  notify(state: any) {
    this.renderTodos(state.todos);
  }
}

const store = new Publisher({
  todos: [
    { title: "hello", isCompleted: false, id: 1 },
    { title: "world", isCompleted: false, id: 2 },
  ],
});

const user = new User();
store.addSubscriber(user);

// add todo
store.setState({
  todos: [...store.state.todos, { title: "new item", id: Math.random() }],
});

// remove todo
store.setState({
  todos: store.state.todos.filter((t) => t.id !== 2),
});

store.setState({
  todos: [
    ...store.state.todos,
    { title: "new item 3", id: Math.random(), isCompleted: true },
  ],
});
