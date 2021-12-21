def selection_sort(arr)
  # type your code in here
  i = arr.length
  result = []
  while i > 0 do 
    min = arr.min
    min_idx = arr.index(min)
    result.push(min)
    arr.delete_at(min_idx)
    i -= 1
  end
  return result
end

if __FILE__ == $PROGRAM_NAME
  # puts "Expecting: [-1, 2, 3, 5]"
  # print "=> "
  # print selection_sort([3, -1, 5, 2])

  # puts

  # # Don't forget to add your own!
  # arr21 = [7, 10, -6, -3, 2, -8, -7, 1, 8, -10, 9, -2, -1, 6, -4, -5, -9, 0, 3, 4, 5]
  # puts "Expecting: [-10, -9, -8, ... 10]"
  # print "=> "
  # print selection_sort(arr21)
  # BENCHMARK HERE, you can print the average runtime
  long_input = []
  100.times { long_input << rand }
  short_input = [7, 3, 5]

  start = Time.now
  1000.times {
    selection_sort(long_input)
    selection_sort(short_input)
  }

  puts("Avg Time = #{(Time.now - start)*1000/2000}")
end

# Please add your pseudocode to this file
# And a written explanation of your solution
