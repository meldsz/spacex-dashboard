import { renderHook, act } from "@testing-library/react";
import { usePopover } from "./usePopover";

describe("usePopover", () => {
  test("Default value of `sortBy` is `asc`", () => {
    const { result } = renderHook(() => usePopover());
    expect(result.current.anchorEl).toBe(null);
  });

  test("The `openPopoverMenu` should correctly change `anchorEl` state", () => {
    const { result } = renderHook(() => usePopover());
    const mockPopoverEvent = {
      currentTarget: "test"
    };
    act(() => {
      result.current.openPopoverMenu(mockPopoverEvent);
    });

    expect(result.current.anchorEl).toBe(mockPopoverEvent.currentTarget);
  });
  test("The `closePopoverMenu` should correctly change `anchorEl` state", () => {
    const { result } = renderHook(() => usePopover());
    act(() => {
      result.current.closePopoverMenu();
    });

    expect(result.current.anchorEl).toBeNull();
  });
});
