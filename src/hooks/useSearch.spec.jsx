import { renderHook, act } from "@testing-library/react";
import { useSearch } from "./useSearch";

describe("useSearch", () => {
  test("Default value of `sortBy` is `asc`", () => {
    const { result } = renderHook(() => useSearch());

    expect(result.current.sortBy).toBe("asc");
  });
  test("Default value of `date` should be correct", () => {
    const { result } = renderHook(() => useSearch());

    expect(result.current.date).toEqual({
      from: null,
      to: null
    });
  });

  test("The `updateSortBy` should correctly change `sortBy` state", () => {
    const { result } = renderHook(() => useSearch());
    const mockCheckboxEvent = {
      target: {
        defaultValue: "desc"
      }
    };
    act(() => {
      result.current.updateSortBy(mockCheckboxEvent);
    });

    expect(result.current.sortBy).toBe("desc");
  });
  test("The `updateFromDate` should correctly update `date` state", () => {
    const { result } = renderHook(() => useSearch());
    act(() => {
      result.current.updateFromDate("test-date");
    });

    expect(result.current.date.from).toBe("test-date");
  });
  test("The `updateToDate` should correctly update `date` state", () => {
    const { result } = renderHook(() => useSearch());
    act(() => {
      result.current.updateToDate("test-date");
    });

    expect(result.current.date.to).toBe("test-date");
  });
  describe("getLaunchQuery", () => { 
    test("The order filter should correctly provide sort search query", () => {
        const { result } = renderHook(() => useSearch());
        const mockCheckboxEvent = {
            target: {
            defaultValue: "desc"
            }
        };
        act(() => {
        result.current.updateSortBy(mockCheckboxEvent);
        });
        const expectedQuery =  { options: { sort: {flight_number: "desc"}}}
        expect(result.current.getLaunchQuery()).toEqual(expectedQuery);
    });
    test("The from date filter should correctly provide search query", () => {
        const { result } = renderHook(() => useSearch());
        const fromDate = new Date('2021-01-12')
        act(() => {
            result.current.updateFromDate(fromDate);
        });
        const expectedQuery =  { 
            options: { sort: {flight_number: "asc"}},
            query: { date_utc: {$gte: '2021-01-12T00:01:SS.00+00:00'}}
        }
        expect(result.current.getLaunchQuery()).toEqual(expectedQuery);
    });
    
    test("The to date filter should correctly provide search query", () => {
        const { result } = renderHook(() => useSearch());
        const toDate = new Date('2021-01-12')
        act(() => {
            result.current.updateToDate(toDate);
        });
        const expectedQuery =  { 
            options: { sort: {flight_number: "asc"}},
            query: { date_utc: {$lte: '2021-01-12T00:01:SS.00+00:00'}}
        }
        expect(result.current.getLaunchQuery()).toEqual(expectedQuery);
    });
    
    test("The from and to date filter should correctly provide search query", () => {
        const { result } = renderHook(() => useSearch());
        const toDate = new Date('2022-01-12')
        const fromDate = new Date('2020-01-12')
        act(() => {
            result.current.updateToDate(toDate);
        });
        act(() => {
            result.current.updateFromDate(fromDate);
        });
        const expectedQuery =  { 
            options: { sort: {flight_number: "asc"}},
            query: { date_utc: {
                $gte:'2020-01-12T00:01:SS.00+00:00',
                $lte: '2022-01-12T00:01:SS.00+00:00'
            }}
        }
        expect(result.current.getLaunchQuery()).toEqual(expectedQuery);
    });
  })
});
