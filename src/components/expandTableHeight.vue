<template>
  <Table border v-bind="table"></Table>
</template>

<script>
  /**
   *@author       孙冬冬
   *@date         2019/4/15 0015 下午 5:01
   *@Copyright    天源迪科信息技术股份有限公司
   *@Description
   */

  export default {
    name: "expandTableHeight",
    data() {
      return {
        table: {
          height:350,
          columns: [
            {
              type: 'expand',
              width: 50,
              align: "center",
              render: (h, params) => {
                return h('Table', {
                  props: {
                    columns:[],
                    data:[]
                  }
                })
              }
            },
            {
              title: '通道id',
              align: "center",
              key: 'id'
            },
            {
              title: '通道名称',
              align: "center",
              key: 'name'
            },
            {
              title: '源数据源',
              align: "center",
              key: 'source',
            }
          ],
          data:[
            {
              id:1,
              name:'通道1',
              source:'源数据源1',
              target:'目标数据源1',
              subscription:'订阅源1',
              remarks:'备注1',
              job: 'Data engineer',
              interest: 'badminton',
              birthday: '1991-05-14',
              book: 'Steve Jobs',
              movie: 'The Prestige',
              music: 'I Cry'
            },
            {
              id:2,
              name:'通道2',
              source:'源数据源2',
              target:'目标数据源2',
              subscription:'订阅源2',
              remarks:'备注2',
              job: 'Data Scientist',
              interest: 'volleyball',
              birthday: '1989-03-18',
              book: 'My Struggle',
              movie: 'Roman Holiday',
              music: 'My Heart Will Go On'
            },
            {
              id:3,
              name:'通道3',
              source:'源数据源3',
              target:'目标数据源3',
              subscription:'订阅源3',
              remarks:'备注3',
              job: 'Data Product Manager',
              interest: 'tennis',
              birthday: '1992-01-31',
              book: 'Win',
              movie: 'Jobs',
              music: 'Don’t Cry'
            },
            {
              id:4,
              name:'通道4',
              source:'源数据源4',
              target:'目标数据源4',
              subscription:'订阅源4',
              remarks:'备注4',
              job: 'Data Analyst',
              interest: 'snooker',
              birthday: '1988-7-25',
              book: 'A Dream in Red Mansions',
              movie: 'A Chinese Ghost Story',
              music: 'actor'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>
