export function Property<T>(defaultValue?: T | Object): PropertyDecorator {
    return (target: Object, key: string) => {
        let propertyDescriptor: Object = {
            set: function (defaultValue, key) { },
            get: function (defaultValue, key) { },
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
    };
}