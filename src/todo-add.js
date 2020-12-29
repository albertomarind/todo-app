import {
    LitElement,
    html
} from 'lit-element';

class TodoAdd extends LitElement {

    static get properties() {
        return {
            todo: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.todo = '';
    }
    render() {
        return html `
           <vaadin-text-field label="Task" value="${this.todo}"  @change="${this.updateTodo}"></vaadin-text-field>
           <vaadin-button theme="primary" @click="${this.addTodo}">Add todo</vaadin-button>
        `;
    }

    addTodo() {
        if (this.todo) {
            let event = new CustomEvent('add-todo', {
                detail: {
                    todo: this.todo
                }
            });
            this.dispatchEvent(event);
            this.todo = '';
        }
    }

    updateTodo(e) {
        this.todo = e.target.value;
    }
}
customElements.define('todo-add', TodoAdd);