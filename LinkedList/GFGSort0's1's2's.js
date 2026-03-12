function segregate(head) {
    // code here
    let zero = 0;
    let one = 0;
    let two = 0;

    let temp = head;
    while (temp) {
        if (temp.data === 0) zero++
        if (temp.data === 1) one++
        if (temp.data === 2) two++

        temp = temp.next;
    }
    temp = head;
    while (temp) {
        while (zero--) {
            temp.data = 0
            temp = temp.next
        }
        while (one--) {
            temp.data = 1
            temp = temp.next
        }
        while (two--) {
            temp.data = 2
            temp = temp.next
        }
    }
    return head
}