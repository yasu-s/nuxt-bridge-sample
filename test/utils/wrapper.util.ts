import { ShallowUnwrapRef } from '@vue/composition-api'
import { Wrapper } from '@vue/test-utils'
import Vue, { ComponentOptions } from 'vue'

/** ShallowUnwrapRef取得 */
type GetShallowUnwrapRef<T> = T extends ShallowUnwrapRef<infer U> ? ShallowUnwrapRef<U> : never

/** 指定キーのみ取得 */
type KnownKeys<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K]
}

/**
 * 対象コンポーネントの型付きvmを取得
 * @param component 対象コンポーネント
 * @param wrapper 取得するwrapperオブジェクト
 * @returns 型付きvm
 */
export const getVm = <Data>(component: ComponentOptions<Vue, Data>, wrapper: Wrapper<Vue>) => {
  type componentDataType = NonNullable<typeof component.data>
  return wrapper.vm as KnownKeys<GetShallowUnwrapRef<componentDataType>> & Vue
}
