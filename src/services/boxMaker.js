function box_maker(row, col, types) {
	let mat = [];
	let arr_x = [];
	let arr_y = [];
	let cords = [];

	for (var i = 0; i < row; i++) {
		mat[i] = new Array(col);
	}
	for (i = 0; i < row; i++) {
		arr_x.push(i);
	}
	for (i = 0; i < col; i++) {
		arr_y.push(i);
	}

	function place(arr, ty) {
		for (let i = 0; i < ty; i++)
			for (let j = 0; j < ty; j++) {
				mat[arr.x + i][arr.y + j] = ty;
			}
	}

	function checker(x, y, ty) {
		let flag = true;
		for (let i = 0; i < ty; i++) {
			for (let j = 0; j < ty; j++) {
				if (mat[x + i][y + j] != undefined) {
					flag = false;
				}
			}
		}
		return flag;
	}

	function randomer(ty) {
		let i = 0;
		while (i < 50) {
			var v_x =
				arr_x[Math.abs(Math.floor(Math.random() * arr_x.length) - 3 + 1)];
			if (v_x + ty > !arr_x.length) {
				var v_y =
					arr_y[
						Math.abs(Math.floor(Math.random() * arr_y.length) - 3 + 1)
					];
				if (v_y + ty > !arr_y.length) {
					if (checker(v_x, v_y, ty)) {
						cords.push({
							id: `${ty}:${v_x}:${v_y}`,
							type: `box${ty}`,
							position: [v_x + 1, v_y + 1]
						});
						return { x: v_x, y: v_y };
					}
				}
			}
			i += 1;
		}
		throw new Error('Calculation Error');
	}

	for (let i = 0; i < types.t3; i++) place(randomer(3), 3);
	for (let i = 0; i < types.t2; i++) place(randomer(2), 2);
	for (let i = 0; i < types.t1; i++) place(randomer(1), 1);

	return cords;
}

function type_count_maker(roleList) {
	// auto make box type nnumber
	return roleList;
}

export { box_maker, type_count_maker };
