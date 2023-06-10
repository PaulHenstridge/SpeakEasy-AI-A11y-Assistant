import React, { useState } from 'react';

import { ConversationContext } from '../contexts/ConversationContext.js';

export const ConversationProvider = ({ children }) => {
    const [conversationHistory, setConversationHistory] = useState([]);

    return (
        <ConversationContext.Provider value={{ conversationHistory, setConversationHistory }}>
            {children}
        </ConversationContext.Provider>
    );
};
