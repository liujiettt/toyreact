import {createElement, render, Component} from './toyReact'

class MyComponent extends Component {
    render() {
        return <div>
        <div> i am a1</div>
        <div> i am a2</div>
    </div>
    }
}

render(MyComponent, document.body)