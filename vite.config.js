import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js',
                    //'resources/js/core/popper.min.js',
                    //'resources/js/core/bootstrap.min.js',
                    //'resources/js/plugins/perfect-scrollbar.min.js',
                    //'resources/js/plugins/smooth-scrollbar.min.js',
                    //'resources/js/material-dashboard.min.js?v=3.1.0',

                ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ]
});
