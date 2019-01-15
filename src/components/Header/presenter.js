import React from 'react'
import styles from './styles.module.scss'
import { StickyContainer, Sticky } from 'react-sticky';


const Header = (props, context) => (
    <StickyContainer>
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
        <Sticky>
            {({
                  style,

                  // the following are also available but unused in this example
                  isSticky,
                  wasSticky,
                  distanceFromTop,
                  distanceFromBottom,
                  calculatedHeight
              }) => (
                <header style={style}>
                    {/* ... */}
                </header>
            )}
        </Sticky>
        {/* ... */}
    </StickyContainer>
);

export default Header