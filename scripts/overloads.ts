
const useGlobalStateOverloads = Array(50).fill(0).map((v, i, arr) => {
    const a = arr.slice(0, i + 1);
    const T = a.map((v, i) => `T${i + 1} = any`).join(', ');
    const K = a.map((v, i) => `k${i + 1}: string`).join(', ');
    const R = a.map((v, i) => `T${i + 1}, SetStateType<T${i + 1}>`).join(', ');
    return `function useGlobalState<${T}>(name: string, ${K}): [${R}];`;
  });

  console.log(useGlobalStateOverloads.join('\n'));