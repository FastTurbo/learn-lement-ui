import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/IndexComponent'
import HelloWorld from '@/components/HelloWorld'
import ContainerComponent from '@/components/ContainerComponent'
import FormComponent from '@/components/FormComponent'
import InputComponent from '@/components/InputComponent'
import SelectComponent from '@/components/SelectComponent'
import SliderComponent from '@/components/SliderComponent'
import TimeComponent from '@/components/TimeComponent'
import FormsComponent from '@/components/FormsComponent'
import TableComponent from '@/components/TableComponent'
import TagComponent from '@/components/TagComponent'
import AlertComponent from '@/components/AlertComponent'
import MenuComponent from '@/components/MenuComponent'
import DropdownComponent from '@/components/DropdownComponent'
import TooltipComponent from '@/components/TooltipComponent'
import CarouselComponent from '@/components/CarouselComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:IndexComponent
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/container',
      name: 'container',
      component: ContainerComponent
    },
    {
      path:'/form',
      name:'form',
      component:FormComponent
    },
    {
      path:'/input',
      name:'input',
      component:InputComponent
    },
    {
      path:'/select',
      name:'select',
      component:SelectComponent
    },
    {
      path:'/slider',
      name:'slider',
      component:SliderComponent
    },
    {
      path:'/time',
      name:'time',
      component:TimeComponent
    },
    {
      path:'/forms',
      name:'forms',
      component:FormsComponent
    },
    {
      path:'/table',
      name:'table',
      component:TableComponent
    },
    {
      path:'/tag',
      name:'tag',
      component:TagComponent
    },
    {
      path:'/alert',
      name:'alert',
      component:AlertComponent
    },
    {
      path:'/menu',
      name:'menu',
      component:MenuComponent
    },
    {
      path:'/dropdown',
      name:'dropdown',
      component:DropdownComponent
    },
    {
      path:'/tooltip',
      name:'tooltip',
      component:TooltipComponent
    },
    {
      path:'/carousel',
      name:'carousel',
      component:CarouselComponent
    }
  ]
})
