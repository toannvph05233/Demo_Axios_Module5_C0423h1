import React, { Component } from 'react';

class LifecycleDemo extends Component {
    constructor(props) {
        super(props);
        // Khởi tạo state ban đầu
        this.state = {
            count: 0,
        };
        // Được gọi khi component được tạo
        console.log('Constructor');
    }

    // Được gọi sau khi component đã được render lần đầu tiên trên DOM
    componentDidMount() {
        console.log('Component Did Mount');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    // Được gọi sau mỗi lần component được cập nhật
    // prevProps: Props trước đó
    // prevState: State trước đó
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did Update');
        console.log('Previous State:', prevState);
        console.log('Current State:', this.state);
    }

    // Được gọi trước khi component bị gỡ bỏ khỏi DOM
    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    // Xử lý sự kiện khi nút được nhấn
    handleClick = () => {
        // Tăng giá trị count trong state
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        console.log('Render');
        // Hiển thị giao diện của component
        return (
            <div>
                <h1>Component Lifecycle Demo</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment Count</button>
            </div>
        );
    }
}

export default LifecycleDemo;
