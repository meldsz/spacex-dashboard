import { renderHook, act } from "@testing-library/react";
import { useFilter } from "./useFilter";

describe("useFilter", () => {
  test("Default value of `filter` is off state", () => {
    const { result } = renderHook(() => useFilter());
    expect(result.current.filter.upcoming).toBeFalsy();
    expect(result.current.filter.past).toBeFalsy();
    expect(result.current.filter.unsuccessful).toBeFalsy();
  });

  test("The `filterChange` should correctly change `upcoming` filter state", () => {
    const { result } = renderHook(() => useFilter());
    const mockCheckboxEvent = {
      target: {
        name: "upcoming",
        checked: true
      }
    };
    act(() => {
      result.current.filterChange(mockCheckboxEvent);
    });

    expect(result.current.filter.upcoming).toBeTruthy();
  });

  test("The `filterChange` should correctly change `past` filter state", () => {
    const { result } = renderHook(() => useFilter());
    const mockCheckboxEvent = {
      target: {
        name: "past",
        checked: true
      }
    };
    act(() => {
      result.current.filterChange(mockCheckboxEvent);
    });

    expect(result.current.filter.past).toBeTruthy();
  });

  test("The `filterChange` should correctly change `unsuccessful` filter state", () => {
    const { result } = renderHook(() => useFilter());
    const mockCheckboxEvent = {
      target: {
        name: "unsuccessful",
        checked: true
      }
    };
    act(() => {
      result.current.filterChange(mockCheckboxEvent);
    });

    expect(result.current.filter.unsuccessful).toBeTruthy();
  });

  describe("getFilterQuery", () => {
    test("No selection of filters should correctly provide launch query", () => {
      const { result } = renderHook(() => useFilter());
      let query = "";
      act(() => {
        query = result.current.getFilterQuery();
      });
      expect(query).toEqual({});
    });

    test("The filter by past launches should correctly provide launch query", () => {
      const { result } = renderHook(() => useFilter());
      act(() => {
        result.current.filterChange({
          target: {
            name: "past",
            checked: true
          }
        });
      });
      expect(result.current.getFilterQuery()).toEqual({ upcoming: false });
    });

    test("The filter by upcoming launches should correctly provide launch query", () => {
      const { result } = renderHook(() => useFilter());
      act(() => {
        result.current.filterChange({
          target: {
            name: "upcoming",
            checked: true
          }
        });
      });
      expect(result.current.getFilterQuery()).toEqual({ upcoming: true });
    });

    test("The filter by unsuccessful launches should correctly provide launch query", () => {
      const { result } = renderHook(() => useFilter());
      act(() => {
        result.current.filterChange({
          target: {
            name: "unsuccessful",
            checked: true
          }
        });
      });
      expect(result.current.getFilterQuery()).toEqual({ success: false });
    });

    test("The filter by upcoming and unsuccessful launches should correctly provide launch query", () => {
      const { result } = renderHook(() => useFilter());
      act(() => {
        result.current.filterChange({
          target: {
            name: "upcoming",
            checked: true
          }
        });
      });
      act(() => {
        result.current.filterChange({
          target: {
            name: "unsuccessful",
            checked: true
          }
        });
      });
      expect(result.current.getFilterQuery()).toEqual({
        success: false,
        upcoming: true
      });
    });

    test("The filter by past and unsuccessful launches should correctly provide launch query", () => {
      const { result } = renderHook(() => useFilter());
      act(() => {
        result.current.filterChange({
          target: {
            name: "past",
            checked: true
          }
        });
      });
      act(() => {
        result.current.filterChange({
          target: {
            name: "unsuccessful",
            checked: true
          }
        });
      });
      expect(result.current.getFilterQuery()).toEqual({
        success: false,
        upcoming: false
      });
    });

    test("The filter by past and upcoming launches should correctly provide launch query", () => {
      const { result } = renderHook(() => useFilter());
      act(() => {
        result.current.filterChange({
          target: {
            name: "past",
            checked: true
          }
        });
      });
      act(() => {
        result.current.filterChange({
          target: {
            name: "upcoming",
            checked: true
          }
        });
      });
      expect(result.current.getFilterQuery()).toEqual({});
    });

    test("The filter by past, unsuccessful and upcoming launches should correctly provide launch query", () => {
      const { result } = renderHook(() => useFilter());
      act(() => {
        result.current.filterChange({
          target: {
            name: "past",
            checked: true
          }
        });
      });
      act(() => {
        result.current.filterChange({
          target: {
            name: "upcoming",
            checked: true
          }
        });
      });
      act(() => {
        result.current.filterChange({
          target: {
            name: "unsuccessful",
            checked: true
          }
        });
      });
      expect(result.current.getFilterQuery()).toEqual({ success: false });
    });
  });
});
