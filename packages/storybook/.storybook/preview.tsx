import type {Preview} from '@storybook/react'
import {HeroUIProvider} from "@heroui/system";

import "./globals.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <HeroUIProvider>
                <Story/>
            </HeroUIProvider>
        ),
    ],
};

export default preview;