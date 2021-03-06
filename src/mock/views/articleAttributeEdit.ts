import {GO_BACK_ACTION, SUBMIT_ACTION} from "base/PageAction";
import {API_GET_MODEL_BY_ID, API_SUBMIT_MODEL} from "APIs/model"

export default {
  layout:[
    {
      name: 'GridRow',
      props: {
        spacing: 3,
      },
  
      children: [
          {
          name: 'GridColumn',
          props: {
            md: 6,
          },
          children: [
            {
              name:'Portlet',
              props: {
                elevation: 6,
                open:true,
                withHeader:true,
                title:'属性编辑',
                //collapsible: true,
                marginTop:2,
              },
              children:[
                {
                  name:'FormGridContainer',
                  children:[
                    {
                      name: 'PortletGridItem',
                      props:{
                        xs:12,                      
                      },
                      children:[
                        {
                          name:'TextBox',
                          props:{
                            label:'标识',
                            variant:"outlined",
                            fullWidth:true,
                            field:'slug',
                          },
                        },
                      ]
                    },
                    {
                      name: 'PortletGridItem',
                      props:{
                        xs:12,                      
                      },
                      children:[
                        {
                          name:'TextBox',
                          props:{
                            label:'名称',
                            variant:"outlined",
                            fullWidth:true,
                            field:'name',
                          },
                        },
                      ]
                    },
                 
                  ]
                },
                {
                  name:'PortletFooter',
                  children: [
                    {
                      name: 'Button',
                      props: {
                        variant: "outlined",
                        rxText: '取消',
                        size:'large',
                        onClick:{
                          name: GO_BACK_ACTION,
                          careDuty: true, //如果有修改，显示保存提示
                        }
                      }
                    },
                    {
                    name: 'Button',
                    props: {
                      rxText: '保存',
                      variant: "contained",
                      color: "primary",
                      size:'large',
                      marginLeft:2,
                      onClick:{
                        name: SUBMIT_ACTION,
                      }          
                    }
                  }]
          
                }
              ]
            },
          ]
        },
      ]
    }
  ],


  isFormPage:true,
  apiForGet:{
    ...API_GET_MODEL_BY_ID,
    params:{
      modelName:'/Model/ArticleAttribute',
    },      
  },

  apiForSave:{
    ...API_SUBMIT_MODEL,
    params:{
      modelName:'/Model/ArticleAttribute',
    },      
  }

}
