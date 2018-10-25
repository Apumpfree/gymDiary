import React, { Component } from 'react';
// import { render } from 'react-dom'; WIP
import PieMenu, { Slice } from 'react-pie-menu';

export default ({ x, y }) => (
    <PieMenu
        radius='250px'
        centerRadius='110px'
        centerX={'50%'}
        centerY={'125%'}
    >
        {/* Contents */}
        <Slice id="slice1" onSelect={() => window.open('http://localhost:3000/','_self')}>
            {/* -----On Hover on slice WIP------- */}
            {/* <div class="dropdown is-up is-hoverable">
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
            </div> */}
            {/* ------------ */}
            Upper
        </Slice>
        <Slice id="slice2" onSelect={() => window.open('http://localhost:3000/','_self')}>
            Lower
        </Slice>
        <Slice id="slice3" onSelect={() => window.open('http://localhost:3000/','_self')}>
            Cardio
        </Slice>
        <Slice id="slice4" onSelect={() => window.open('http://localhost:3000/','_self')}>
            Core
        </Slice>
        <Slice id="slice5" onSelect={() => window.open('http://localhost:3000/','_self')}>
            Back
        </Slice>
    </PieMenu>
);