/** 
 * 序列化表单数据
 * @description 将对象{ a: 1, b: 2 }转换成 a=1&b=2 这个格式 
 */
export function serialize(data: { [index: string]: any }) {
	if (!data) return;
  const list: string[] = [];
  Object.keys(data).forEach(val => {
    list.push(`${val}=${data[val]}`);
  });
  return list.join('&');
}

