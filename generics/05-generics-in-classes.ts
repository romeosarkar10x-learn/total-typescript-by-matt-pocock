class Component<T> {
    private props: T;

    constructor(props: T) {
        this.props = props;
    }

    getProps() {
        return this.props;
    }
}

const component = new Component(1);
