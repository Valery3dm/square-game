export const getSquares = async (setModeVariables, setIsLoading) => {
  try {
    const response = await fetch('http://demo7919674.mockable.io');
    const jsonRes = await response.json();
    await setModeVariables(jsonRes);
    await setIsLoading(false)
  } catch (error) {
    console.log(error);
  }
};
