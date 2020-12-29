import {
    LitElement,
    html,
    css
} from 'lit-element';

class TodoView extends LitElement {

    static get styles() {
        return css `
            :host{
                display:block;
                border:1px solid gray;
                padding:1rem;
            }
            todo-list{
                margin-top:1rem;
            }
            table {
                border:1px solid lightgray; 
            }
            td,th{
                padding:.5rem;
            }

        `;
    }


    static get properties() {
        return {
            todos: {
                type: Array
            }
        }
    }
    constructor() {
        super();
        this.todos = [];
    }

    render() {
        return html `
           <todo-add @add-todo="${this.addTodo}"></todo-add>
           ${this.todos.length > 0 ? html`
           <todo-list .todos="${this.todos}" @complete="${this.complete}"></todo-list>
           `: 
           html``}
        `;
    }
    addTodo(e) {
        this.todos = [...this.todos, e.detail.todo];
    }
    complete(e){
        this.todos = this.todos.filter((todo, i) => i !== e.detail.index);
    }
}
customElements.define('todo-view', TodoView);