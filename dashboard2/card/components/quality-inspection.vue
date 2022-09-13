<template>
  <div class="list-wrap">
    <a-typography-title class="block-title" :heading="6">
      <!-- {{ $t('cardList2.tab.title.content') }} -->
    </a-typography-title>
    <a-row class="list-row" :gutter="24">
      <a-col
        :xs="12"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        :xxl="6"
        class="list-col"
      >
        <div class="card-wrap empty-wrap">
          <a-card :bordered="false" hoverable @click="newProject">
            <a-result :status="null" :title="$t('cardList2.content.action')">
              <template #icon>
                <icon-plus style="font-size: 20px" />
              </template>
            </a-result>
          </a-card>
        </div>
      </a-col>
      <a-col
        v-for="item in renderData"
        :key="item.id"
        class="list-col"
        :xs="12"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        :xxl="6"
      >
        <CardWrap
          :loading="loading"
          :title="item.title"
          :description="item.description"
          :default-value="item.enable"
          :action-type="item.actionType"
          :icon="item.icon"
          :open-txt="$t('cardList2.content.inspection')"
          :show-tag="false"
        >
          <a-descriptions
            style="margin-top: 16px"
            :data="item.data"
            layout="inline-horizontal"
            :column="2"
          />
          <template #skeleton>
            <a-skeleton :animation="true">
              <a-skeleton-line
                :widths="['50%', '50%', '100%', '40%']"
                :rows="4"
              />
              <a-skeleton-line :widths="['40%']" :rows="1" />
            </a-skeleton>
          </template>
        </CardWrap>
      </a-col>
    </a-row>

     <template>
      <a-button @click="handleClick">Open Modal</a-button>
      <a-modal width="auto" v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
        <template #title>
          创建新项目
        </template>
        <div>
          <a-form :model="form" :style="{width:'600px'}" @submit="handleSubmit">
            <a-form-item field="name" label="项目名称">
              <a-input v-model="project.name" placeholder="请输入项目名称" />
            </a-form-item>
        
            <a-select v-model="value" :style="{width:'320px'}" placeholder="请选择项目所属的团队">
              <a-option v-for="item of data" :value="item" :label="item.name" />
            </a-select>
                  
            <a-form-item>
              <a-button html-type="submit">确认创建</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-modal>
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { queryInspectionList, ServiceRecord } from '@/api/list';
  import useRequest from '@/hooks/request';
import { reactive, ref } from 'vue';
  import CardWrap from './card-wrap.vue';

  const defaultValue: ServiceRecord[] = new Array(3).fill({});
  const { loading, response: renderData } = useRequest<ServiceRecord[]>(
    queryInspectionList,
    defaultValue
  );


  const newProject = () =>{
    visible.value = true;
    //todo:
  }

    const value = ref();
    let data = [
      {
        teamID:1,
        name:'aa',
      },
      {
         teamID:2,
          name:'bb',
      },
      {
         teamID:3,
         name:'cc',
      }
    ];
    const project = reactive({
      name: '',
      team: value.value.name,
    })
      const visible = ref(false);

      const handleClick = () => {
        visible.value = true;
      };
      const handleOk = () => {
        visible.value = false;
      };
      const handleCancel = () => {
        visible.value = false;
      };
      const form = reactive({
      name: '',
      text: '',
      isPublic: false,
    })
    const handleSubmit = (data:any) => {
      console.log(data)
    }
</script>

<style scoped lang="less">
  .card-wrap {
    height: 100%;
    border: 1px solid var(--color-neutral-3);
    transition: all 0.3s;

    &:hover {
      transform: translateY(-4px);
    }

    :deep(.arco-card-meta-description) {
      color: rgb(var(--gray-6));

      .arco-descriptions-item-label-inline {
        color: rgb(var(--gray-6));
        font-weight: normal;
        font-size: 12px;
      }

      .arco-descriptions-item-value-inline {
        color: rgb(var(--gray-8));
      }
    }
  }

  .empty-wrap {
    height: 200px;
    border-radius: 4px;

    :deep(.arco-card) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border-radius: 4px;

      .arco-result-title {
        color: rgb(var(--gray-6));
      }
    }
  }
</style>
