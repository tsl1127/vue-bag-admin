import { addUniqueId } from '@/packages/utils/lodash'

const paths = addUniqueId([
    {
        name: '首页',
        path: '/home',
        icon: '',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: true,
        filePath: '/admin/views/home/Index.vue',
    },
    {
        name: 'CMS管理',
        router: '',
        icon: 'SettingOutlined',
        shows: 1,
        children: [
            {
                name: '栏目管理',
                path: '/channel',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/channel/Index.vue',
            },
            {
                name: '内容管理',
                path: '/article',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/article/Index.vue',
            },
            {
                name: 'Bnaner管理',
                path: '/banner',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/banner/Index.vue',
            },
            {
                name: '友情链接',
                path: '/links',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/links/Index.vue',
            },
            {
                name: '关键词管理',
                path: '/antistop',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/antistop/Index.vue',
            },
            {
                name: '下载管理',
                path: '/download',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/download/Index.vue',
            },
        ],
    },
    {
        name: '用户管理',
        router: '',
        icon: 'SettingOutlined',
        shows: 1,
        children: [
            {
                name: '用户管理',
                path: '/sys/member',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/packages/views/sys/member/Index.vue',
            },
        ],
    },
    {
        name: '配置管理',
        router: '',
        icon: 'SettingOutlined',
        shows: 1,
        children: [
            {
                name: '网站配置',
                path: '/website',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/website/Index.vue',
            },
            {
                name: '留言管理',
                path: '/leave',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/leave/Index.vue',
            },
        ],
    },
], '_local')

export default paths
