export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[test-attr='${attr}']`);
    return wrapper;
};