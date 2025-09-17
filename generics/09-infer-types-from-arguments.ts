class Component<T> {
    private props: T;

    constructor(props: T) {
        this.props = props;
    }

    getProps() {
        return this.props;
    }
}

function cloneComponent<T>(component: Component<T>) {
    return new Component(component.getProps());
}

const component = new Component(1);
const component2 = cloneComponent(component);
