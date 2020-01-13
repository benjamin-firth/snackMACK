import { fetchFoodTrucks } from './apiCalls';

describe('apiCalls', () => {
  describe('fetchFoodTrucks', () => {
    const mockCity = 'calgary';
    const mockResponse = {type: "cors", url: "https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/schedule/calgary"};

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should call fetch with the correct param', async () => {
      await fetchFoodTrucks(mockCity);
      expect(window.fetch).toHaveBeenCalled();
    })
  })
})