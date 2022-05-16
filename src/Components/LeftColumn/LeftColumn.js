import React from 'react';
import Profile from './Profile/Profile';
import MoreOptions from './OptionsRed/MoreOptions';

const LeftColumn = () => {

    return (
        <aside>
            <Profile />
            <MoreOptions />
        </aside>
    );
};

export default LeftColumn;