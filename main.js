import {createElement, render, Component} from './toyReact'

class MyComponent extends Component {
    render() {
        return <div>
        <div>my Component</div>
        {this.children}
    </div>
    }
}

render(<MyComponent>
            <div> i am a1</div>
            <div> i am a2</div>
        </MyComponent>,
        document.body)