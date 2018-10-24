import React from 'react';
import PieMenu, { Slice } from 'react-pie-menu';

export default ({ x, y }) => (
    <PieMenu
        radius='250px'
        centerRadius='110px'
        centerX={x}
        centerY={y}
    >
        {/* Contents */}
        <Slice onSelect={() => window.open('https://www.facebook.com', '_blank')}>
            <div class="dropdown is-up is-hoverable">
                <div class="dropdown-trigger">
                    Upper
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div class="dropdown-content">
                        <div class="dropdown-item">
                            <img src="/images/chest.jpg" alt="upper"></img>
                        </div>
                    </div>
                </div>
            </div>
        </Slice>
        <Slice onSelect={() => window.open('https://www.twitter.com', '_blank')}>
            Lower
        </Slice>
        <Slice onSelect={() => window.open('https://www.linkedin.com', '_blank')}>
            Cardio
        </Slice>
        <Slice onSelect={() => window.open('https://github.com/psychobolt/react-pie-menu', '_blank')}>
            Core
        </Slice>
        <Slice onSelect={() => window.open('https://en.wikipedia.org/wiki/RSS', '_blank')}>
            Back
        </Slice>

    </PieMenu>
);