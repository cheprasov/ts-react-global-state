import { render } from '@testing-library/react';
import React, { useMemo } from 'react';
import ComponentWrapper from './ComponentWrapper';

describe('ComponentWrapper', () => {
    it('should wrap provided components in correct order', () => {
        const wrapper = render(
            <div className='root'>
                <ComponentWrapper components={[
                    ({children}) => (<div>{children}</div>),
                    ({children}) => (<span>{children}</span>),
                    ({children}) => (<p>{children}</p>),
                    ({children}) => (<i>{children}</i>),
                ]}>
                    <b>Foo</b>
                    <b>Bar</b>
                </ComponentWrapper>
            </div>
        );
        const userElements = wrapper.container.querySelectorAll('.root > div > span > p > i > b');
        expect(userElements).toHaveLength(2);
        expect(userElements[0].textContent).toEqual('Foo');
        expect(userElements[1].textContent).toEqual('Bar');
    });

    it('should work correct for empty component list for wrap', () => {
        const wrapper = render(
            <div className='root'>
                <ComponentWrapper components={[]}>
                    <b>Foo</b>
                    <b>Bar</b>
                </ComponentWrapper>
            </div>
        );
    const userElements = wrapper.container.querySelectorAll('.root > b');
        expect(userElements).toHaveLength(2);
        expect(userElements[0].textContent).toEqual('Foo');
        expect(userElements[1].textContent).toEqual('Bar');
    });

    it('should wrap provided components in correct order without children', () => {
        const wrapper = render(
            <div className='root'>
                <ComponentWrapper components={[
                    ({children}) => (<div>{children}</div>),
                    ({children}) => (<span>{children}</span>),
                    ({children}) => (<p>{children}</p>),
                    ({children}) => (<i>{children}</i>),
                ]} />
            </div>
        );
        const userElements = wrapper.container.querySelectorAll('.root > div > span > p > i > *');
        expect(userElements).toHaveLength(0);
    });
});