import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { ServiceRecord } from '@/api/list';

const qualityInspectionList: ServiceRecord[] = [
  {
    id: 1,
    name: 'quality',
    title: '2022夏软工小学期',
    description: '2021-10-12 00:00:00',
    data: [
      // {
      //   label: '待质检数',
      //   value: '120',
      // },
      // {
      //   label: '积压时长',
      //   value: '60s',
      // },
      // {
      //   label: '待抽检数',
      //   value: '0',
      // },
      {
        label: '成员数',
        value: '100人',
      },
    ],
  },
  {
    id: 2,
    name: 'quality',
    title: '运动达人',
    description: '2021-12-11 18:30:00',
    data: [
      // {
      //   label: '待质检数',
      //   value: '120',
      // },
      // {
      //   label: '积压时长',
      //   value: '60s',
      // },
      // {
      //   label: '待抽检数',
      //   value: '0',
      // },
      {
        label: '成员数',
        value: '10人',
      },
    ],
  },
  {
    id: 3,
    name: 'quality',
    title: '2021夏小学期团队',
    description: '2021-10-15 08:10:00',
    data: [
      // {
      //   label: '待质检数',
      //   value: '120',
      // },
      // {
      //   label: '积压时长',
      //   value: '60s',
      // },
      // {
      //   label: '待抽检数',
      //   value: '0',
      // },
      {
        label: '成员数',
        value: '3人',
      },
    ],
  },
];
const theServiceList: ServiceRecord[] = [
  {
    id: 1,
    name: 'quality',
    title: '2021春java团队',
    description: '2021-10-15 08:10:00',
    // icon: 'code',

    // enable: true,
    // actionType: 'button',
    data: [
      {
        label: '成员数',
        value: '3人',
      },
    ],
  },
  // {
  //   id: 2,
  //   icon: 'edit',
  //   title: '用户分布',
  //   description:
  //     '快速诊断用户人群，地域细分情况，了解数据分布的集中度，以及主要的数据分布的区间段是什么。',
  //   enable: true,
  //   actionType: 'button',
  //   expires: true,
  // },
  // {
  //   id: 3,
  //   icon: 'user',
  //   title: '资源分发',
  //   description:
  //     '移动端动态化资源分发解决方案。提供稳定大流量服务支持、灵活定制的分发圈选规则，通过离线化预加载。',
  //   enable: false,
  //   actionType: 'button',
  // },
  // {
  //   id: 4,
  //   icon: 'user',
  //   title: '用户画像分析',
  //   description:
  //     '用户画像就是将典型用户信息标签化，根据用户特征、业务场景和用户行为等信息，构建一个标签化的用户模型。',
  //   enable: true,
  //   actionType: 'button',
  // },
];
const rulesPresetList: ServiceRecord[] = [
  
];

setupMock({
  setup() {
    // Quality Inspection
    Mock.mock(new RegExp('/api/list/quality-inspection'), () => {
      return successResponseWrap(
        qualityInspectionList.map((_, index) => ({
          ...qualityInspectionList[index % qualityInspectionList.length],
          id: Mock.Random.guid(),
        }))
      );
    });

    // the service
    Mock.mock(new RegExp('/api/list/the-service'), () => {
      return successResponseWrap(
        theServiceList.map((_, index) => ({
          ...theServiceList[index % theServiceList.length],
          id: Mock.Random.guid(),
        }))
      );
    });

    // rules preset
    Mock.mock(new RegExp('/api/list/rules-preset'), () => {
      return successResponseWrap(
        rulesPresetList.map((_, index) => ({
          ...rulesPresetList[index % rulesPresetList.length],
          id: Mock.Random.guid(),
        }))
      );
    });
  },
});
