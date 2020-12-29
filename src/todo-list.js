import {
    LitElement,
    html,
    css
} from 'lit-element';

class TodoList extends LitElement {


    static get styles() {
        return css `
          :host {
              display:block;
          }
          table {
              border:1px solid black;
           }
           td,th{
               padding:.5rem;
           }
        `;
    }

    static get properties() {
        return {
            todos: {
                type: Array,
                reflect: true
            }
        }
    }

    constructor() {
        super();
        this.todos = [];
    }

    render() {
        return html `
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th><input type="checkbox" #id></th>
                        <th>Todo</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.todos.map((todo,index)=>html`
                        <tr>
                            <td>
                                ${index+1}
                            </td>
                            <td>
                                <input type="checkbox">
                            </td>
                            <td>
                                ${todo}
                            </td>
                            <td>
                                <button @click="${e=>this.complete(e,todo,index)}">Complete</button>
                            </td>
                        </tr>
                    `)}
                </tbody>   
            </table>
        `;
    }

    complete(event, todo, index) {
        this.todos = this.todos.filter((todo, i) => i !== index);
        this.fireCompleteEvent(index);
    }

    fireCompleteEvent(index) {
        let event = new CustomEvent('complete', {
            detail: {
                index
            }
        });
        this.dispatchEvent(event);
    }

    addTodo() {
        if (this.todo) {

            this.todo = '';
        }
    }
}
customElements.define('todo-list', TodoList);